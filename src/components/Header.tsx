type Props = {
    pictureUrl: string;
    name: string;
    username: string;
};

const Header = ({ pictureUrl, name, username }: Props) => {
    return (
        <div className="flex gap-4">
            <img className="rounded-full" src={pictureUrl} alt={name} width="48px" height="48px" />
            <div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-neutral-600">@{username}</div>
            </div>
        </div>
    );
};

export default Header;
