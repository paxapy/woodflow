package ui

import (
    "fmt"
    "net"
    "net/http"
    "time"

    "github.com/paxapy/boats/model"
)

type Config struct {
    Assets http.FileSystem
}

func Start(cfg Config, dbModel *model.Model, listener net.Listener) {

    server := &http.Server{
        ReadTimeout:    60 * time.Second,
        WriteTimeout:   60 * time.Second,
        MaxHeaderBytes: 1 << 16}

    http.Handle("/", indexHandler(dbModel))

    go server.Serve(listener)
}

const indexHTML = `
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello world!!!</title>
  </head>
  <body>
    <div id='root'></div>
  </body>
</html>
`

func indexHandler(dbModel *model.Model) http.Handler {
    return http.HandlerFunc(func(rWriter http.ResponseWriter, request *http.Request) {
        fmt.Fprintf(rWriter, indexHTML)
    })
}
