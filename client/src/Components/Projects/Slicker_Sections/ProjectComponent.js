

const ProjectComponent = (props) => {
    return(
        <div className="col p-5 pt-5 project_container">
                <div className="row"><h2>{props.header}</h2></div>
                <div className="row"><h5 className="project_info text-danger">{props.in_progress}</h5></div>
            <div className="row">
            {props.desc}
                <a href={props.link}>{props.learn_more}</a>
            </div>
        </div>
    );
}

export default ProjectComponent;