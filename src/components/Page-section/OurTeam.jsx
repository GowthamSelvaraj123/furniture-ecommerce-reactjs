import TeamCard from "../UI/team-card/TeamCard";

export default function OurTeam() {
    const teamDatas = [
        {img:"src/assets/person_1.jpg",title:'Lawson Arnold', meta:'CEO, Founder, Atty.', description:'Separated they live in.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}, 
        {img:"src/assets/person_2.jpg",title:'Jeremy Walker', meta:'CEO, Founder, Atty.', description:'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}, 
        {img:"src/assets/person_3.jpg",title:'Patrik White', meta:'CEO, Founder, Atty.', description:'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}, 
        {img:"src/assets/person_4.jpg",title:'Patrik White', meta:'CEO, Founder, Atty.', description:'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}, 
    ]
    return (
        <>
            <div class="untree_co-section">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col-lg-5 mx-auto text-center">
                            <h2 class="section-title">Our Team</h2>
                        </div>
                    </div>
                    <div class="row">
                        {teamDatas.map((teamData) => { return(
                            <>
                            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                                <TeamCard teamData={teamData}></TeamCard>
                            </div>
                            </>
                        );})}
                    </div>
                </div>
            </div></>
    )
}