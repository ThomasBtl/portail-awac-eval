import type { Element } from './chart.type';

export interface Artificialisation {
    territory: Element[];
    residential: Element[];
    artificialisationIncrease: number;
    residentialIncrease: number;
    pctArtificialisationIncrease: number;
    pctResidentialShareInArtificialisation: number;
    residentialShare: number;
    commercialShare: number;
    industrialShare: number;
}

export interface Flood {
    nbRetailOfficesServicesAtRisk: number;
    nbIndustryCraftsAtRisk: number;
    nbResidencesAtRisk: number;
    pctRetailOfficesServicesAtRisk: number;
    pctIndustryCraftsAtRisk: number;
    pctResidencesAtRisk: number;
    nbNursingHomeAtRisk: number;
    nbHospitalAtRisk: number;
    nbNurseryAtRisk: number;
    nbPeopleAtRisk: number;
}

export interface Heat {
    nbHospitalAtRisk: number;
    nbNurseryAtRisk: number;
    nbNursingHomeAtRisk: number;
    nbPeopleAtRisk: number;
    excessDeathCount: number;
    displayedDeathCount: number;
    excessCost: number;
    displayedExcessCost: number;
    pctPeopleAtRisk: number;
    displayedNbPeopleAtRisk: number;
}

export interface Water {
    rationCost: number;
}

interface SuperAgriculture {
    [key: string]: number
}

export interface Agriculture extends SuperAgriculture {
    usedAgriculturalArea: number;
    pctUsedAgriculturalArea: number;
    permanentMeadows: number;
    pctPermanentMeadowsInUAA: string;
    winterWheat: number;
    pctWinterWheatInUAA: string;
    feedCorn: number;
    pctFeedCornInUAA: string;
    potato: number;
    pctPotatoInUAA: string;
    sugarBeet: number;
    pctSugarBeetInUAA: string;
    suggestedHealthyConsumptionOilseed: number;
    suggestedHealthyConsumptionFruitAndVegetable: number;
    suggestedHealthyConsumptionLegume: number;
    suggestedHealthyConsumptionPotato: number;
    suggestedHealthyConsumptionSugar: number;
    suggestedHealthyConsumptionMeat: number;
    suggestedHealthyConsumptionMilk: number;
    suggestedHealthyConsumptionCereal: number;
    productionOilseed: number;
    productionFruitAndVegetable: number;
    productionLegume: number;
    productionPotato: number;
    productionSugar: number;
    productionMeat: number;
    productionMilk: number;
    productionCereal: number;
    comsumptionFruitAndVegetable: number;
    comsumptionLegume: number;
    comsumptionPotato: number;
    comsumptionSugar: number;
    comsumptionMeat: number;
    comsumptionMilk: number;
    comsumptionCereal: number
}

export interface Health {
    nbDeathByAirPollutants: number;
}

export interface Municipality {
    ins: string;
    name: string;
    artificialisation: Artificialisation;
    population: Element[];
    householdSize: Element[];
    nbHouses: Elementp[];
    flood: Flood;
    heat: Heat;
    water: Water;
    agriculture: Agriculture;
    superficy: number;
    health: Health;
}