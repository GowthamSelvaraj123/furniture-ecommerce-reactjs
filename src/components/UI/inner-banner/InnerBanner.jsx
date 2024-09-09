export default function InnerBanner({head})
{
    return(<>
    			<div class="hero">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-lg-5">
							<div class="intro-excerpt">
								<h1>{head}</h1>
							</div>
						</div>
						<div class="col-lg-7">
						</div>
					</div>
				</div>
			</div>

    </>);
}