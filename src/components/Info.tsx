type Props = {
    infoText: string;
};

const Info = ({ infoText }: Props) => {
    return <p className="text-md text-neutral-600">{infoText}</p>;
};

export default Info;
