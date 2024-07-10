import './index.css'


const SkillSection = (props) =>{
    const {skillDetails} = props;

    return(
        <li className="all-skills">
            <img src={skillDetails.image_url} className='skill-img'/>
            <span className='skill-name'>{skillDetails.name}</span>
        </li>
    )
}

export default SkillSection;