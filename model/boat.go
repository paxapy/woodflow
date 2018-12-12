package model

type db interface {
    SelectBoats() ([]*Boat, error)
}

type Model struct {
    db
}

func New(db db) *Model {
    return &Model{
        db: db,
    }
}

func (m *Model) Boats() ([]*Boat, error) {
    return m.SelectBoats()
}

type Boat struct {
    Id int64
    Title, Type string
}
