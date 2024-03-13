export type AddedToStackSuccessResponse = {
    addedElement: number
    stack: number[]
}

export type RemovedTopElementSuccessResponse = {
    removedElement: number
    stack: number[]
}

export type RemovedAllElementsSuccessResponse = {
    stackBeforeDeletion: number[]
    stack: number[]
}

export type GetAllStackElementsSuccessResponse = {
    stack: number[]
}