import { IsNumber } from "class-validator";


export class AddToStackDto {
    @IsNumber({allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0}, {message: 'The provided element to add must be an intiger'})
    elementToAdd: number;
}