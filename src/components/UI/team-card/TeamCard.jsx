export default function TeamCard({teamData}) {
    return (
        <>
            <div>
                <img src={teamData.img} class="img-fluid mb-5" />
                <h3 clas><a href="#">{teamData.title}</a></h3>
                <span class="d-block position mb-4">{teamData.meta}</span>
                <p>{teamData.description}</p>
            </div>
        </>
    );
}