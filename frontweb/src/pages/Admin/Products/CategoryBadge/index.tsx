import './styles.css';

type Props = {
    name: string;
}

const CategoryBadge = ({name}: Props) =>{
    return(
        <div className="categorie-badge-container">{name}</div>
    )
}

export default CategoryBadge;