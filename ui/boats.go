package ui

import (
    "fmt"
    "net/http"
    "encoding/json"

    "github.com/paxapy/boats/model"
)

func boatsHandler(m *model.Model) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		boats, err := m.Boats()
		if err != nil {
			http.Error(w, "This is an error", http.StatusBadRequest)
			return
		}

		js, err := json.Marshal(boats)
		if err != nil {
			http.Error(w, "This is an error", http.StatusBadRequest)
			return
		}

		fmt.Fprintf(w, string(js))
	})
}
