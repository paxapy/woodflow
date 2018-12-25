package model

type Page struct {
    title string
    body string
}

func (m *Model) Pages() ([]*Page, error) {
    return m.SelectPages()
}
