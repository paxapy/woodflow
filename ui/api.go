package ui

import (
    "fmt"
    "net/http"
    "encoding/json"

    "github.com/paxapy/boats/model"
)

func listHandler(list interface{}, err error) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if err != nil {
            print(err)
			http.Error(w, "Error getting list", http.StatusBadRequest)
			return
		}

		js, err := json.Marshal(list)
		if err != nil {
            print(err)
			http.Error(w, "Error encoding json", http.StatusBadRequest)
			return
		}

		fmt.Fprintf(w, string(js))
	})
}

func boatsHandler(m *model.Model) http.Handler {
    boats, err := m.Boats()
    return listHandler(boats, err)
}

func pagesHandler(m *model.Model) http.Handler {
    pages, err := m.Pages()
    return listHandler(pages, err)
}
