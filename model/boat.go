package model

type Boat struct {
    Id int64
    Title, Type string
}

func (m *Model) Boats() ([]*Boat, error) {
    return m.SelectBoats()
}
