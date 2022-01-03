//Models
export interface FetchAllDataPlanets {
    count:    number;
    next:     string;
    previous: null;
    results:  BigDataPlanets[];
}

export interface BigDataPlanets {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       string[];
    films:           string[];
    created:         string;
    edited:          string;
    url:             string;
}

// Podriamos reutilizar la interface BigDataPlanets y hacer uso del operador ? (optional)
export interface SmallDataPlanetsLocal {
    name:            string;
    climate:         string;
    gravity:         string;
} 