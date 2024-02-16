    export interface userRegistro {
    
    id: number,
    name: string,
    userRegistrationId: number
}

export interface EnviarDados {

    CityId: number,
    UtilityId: number,
    DeveloperId: number,
    IsAccessOpinion: boolean
    NameProjectDevelop: string,
    NumberCapacityKwac: number,
    UserRegistrationId: number
   
}

export interface Developer {
    id: number,
    name: string,
    description: string,
    userRegistrationId: number
}

export interface Utilitys {
    id: number;
    name: string;
    description: string;
    userRegistrationId: number;
}

export interface UtilitysState {

    
    id: number,
    name: string,
    userRegistrationId: number,
    utilitys: Utilitys[];
    
}

export interface State {
    dateRegistration: string,
    id: number,
    name: string,
}

export interface City {
    id: number,
    name: string,
    userRegistrationId: number
    stateId: number,
}

export interface EstadoCidade {
    
    cities: City[]
}

