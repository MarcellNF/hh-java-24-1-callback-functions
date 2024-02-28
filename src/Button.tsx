type ButtonProps = {
    count: number,
    click: (username: string) => void
}

export default function Button(props: Readonly<ButtonProps>){
    return (
        <button onClick={() => props.click("Harald")}>
            count is {props.count}
        </button>
    );
}