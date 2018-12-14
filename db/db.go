package db

import (
    "database/sql"

    "github.com/paxapy/boats/model"
    "github.com/jmoiron/sqlx"
    _ "github.com/lib/pq"
)

type Config struct {
    ConnectString string
}

func InitDb(cfg Config) (*pgDb, error) {
    if dbConn, err := sqlx.Connect("postgres", cfg.ConnectString); err != nil {
        return nil, err
    } else {
        pg := &pgDb{dbConn: dbConn}
        if err := pg.dbConn.Ping(); err != nil {
            return nil, err
        }
        if err := pg.createTablesIfNotExist(); err != nil {
            return nil, err
        }
        if err := pg.prepareSqlStatements(); err != nil {
            return nil, err
        }
        return pg, nil
    }
}

type pgDb struct {
    dbConn *sqlx.DB
    sqlSelectBoats *sqlx.Stmt
    sqlSelectBoat *sql.Stmt
}

func (pg *pgDb) createTablesIfNotExist() error {
    create_sql := `
       CREATE TABLE IF NOT EXISTS boats (
       id SERIAL NOT NULL PRIMARY KEY,
       title TEXT NOT NULL,
       type TEXT NOT NULL
    );`
    if rows, err := pg.dbConn.Query(create_sql); err != nil {
        return err
    } else {
        rows.Close()
    }
    return nil
}

func (pg *pgDb) prepareSqlStatements() (err error) {

    if pg.sqlSelectBoats, err = pg.dbConn.Preparex(
        "SELECT id, title, type FROM boats",
    ); err != nil {
        return err
    }

    return nil
}

func (pg *pgDb) SelectBoats() ([]*model.Boat, error) {
    boats := make([]*model.Boat, 0)
    if err := pg.sqlSelectBoats.Select(&boats); err != nil {
        return nil, err
    }
    return boats, nil
}
