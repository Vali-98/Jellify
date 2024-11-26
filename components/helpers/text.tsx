import { H1 as TamaguiH1, SizeTokens, Label as TamaguiLabel, H6 } from "tamagui"

interface LabelProps {
    htmlFor: string,
    children: string,
    size: SizeTokens
}

export function Label(props: LabelProps): React.JSX.Element {
    return (
        <TamaguiLabel htmlFor={props.htmlFor} justifyContent="flex-end">{ props.children }</TamaguiLabel>
    )
}

export function H1({ children }: { children: string }): React.JSX.Element {
    return (
        <TamaguiH1 marginVertical={30}>{ children }</TamaguiH1>
    )
}

export function Text({ children }: { children: string }): React.JSX.Element {
    return (
        <H6>{ children }</H6>
    )
}