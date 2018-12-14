package daemon

import (
    "log"
    "net"
    "os"
    "os/signal"
    "syscall"

    "github.com/paxapy/boats/db"
    "github.com/paxapy/boats/model"
    "github.com/paxapy/boats/ui"
)

type Config struct {
    ListenSpec string

    Db db.Config
    UI ui.Config
}

func Run(cfg *Config) error {
    log.Printf("starting, HTTP on: %s\n", cfg.ListenSpec)

    db, err := db.InitDb(cfg.Db)
    if err != nil {
        log.Printf("error initializing database: %v\n", err)
        return err
    }

    dbModel := model.New(db)

    listener, err := net.Listen("tcp", cfg.ListenSpec)
    if err != nil {
        log.Printf("error creating listener: %v\n", err)
    }

    ui.Start(cfg.UI, dbModel, listener)
    waitForSignal()

    return nil
}

func waitForSignal() {
    ch := make(chan os.Signal)
    signal.Notify(ch, syscall.SIGINT, syscall.SIGTERM)
    signal := <-ch
    log.Printf("got signal: %v, exiting.", signal)
}
