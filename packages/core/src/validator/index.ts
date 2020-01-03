export interface Rule {
    require: boolean,
    validator?: () => void
    type?: string
    errorMessage: string
}

export const validator = (value: any, rules: Rule[]) => {

}