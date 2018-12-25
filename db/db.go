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
    sqlSelectList *sqlx.Stmt
    sqlSelectItem *sql.Stmt
}

var createSql = [...]string{
    `CREATE TABLE IF NOT EXISTS boats (
     id SERIAL NOT NULL PRIMARY KEY,
     title TEXT NOT NULL,
     type TEXT NOT NULL
    );`,
    `CREATE TABLE IF NOT EXISTS pages (
     id SERIAL NOT NULL PRIMARY KEY,
     title TEXT NOT NULL,
     body TEXT NOT NULL
    );`,
}

var selectSql = [...]string{
    "SELECT id, title, type FROM boats",
    "SELECT id, title, body FROM pages",
}

func (pg *pgDb) createTablesIfNotExist() error {
    for _, q := range createSql {
        if rows, err := pg.dbConn.Query(q); err != nil {
            return err
        } else {
            rows.Close()
        }
    }
    return nil
}

func (pg *pgDb) prepareSqlStatements() (err error) {
    for _, q := range selectSql {
        if pg.sqlSelectList, err = pg.dbConn.Preparex(q); err != nil {
            return err
        }
    }
    return nil
}

func (pg *pgDb) SelectBoats() ([]*model.Boat, error) {
    boats := make([]*model.Boat, 0)
    if err := pg.sqlSelectList.Select(&boats); err != nil {
        return nil, err
    }
    return boats, nil
}

func (pg *pgDb) SelectPages() ([]*model.Page, error) {
    pages := make([]*model.Page, 0)
    if err := pg.sqlSelectList.Select(&pages); err != nil {
        return nil, err
    }
    return pages, nil
}
