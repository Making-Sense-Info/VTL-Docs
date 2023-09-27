import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

import SvgArrowRight from '@site/src/svg/ArrowRight';
import SvgDevelop from '@site/src/svg/Develop';
import SvgPdf from '@site/src/svg/Pdf';

function Hero() {
	const { colorMode } = useColorMode();
	const isDarkTheme = colorMode === 'dark';
	const logoSrc = 'img/logo-sdmx.png';
	const svgColor = isDarkTheme ? 'white' : 'black';
	return (
		<header className="rds-hero">
			<div className="container">
				<div className="row">
					<div className="col col--12">
						<div className="row">
							<div className="col col--12 centered-content">
								<img src={logoSrc} alt="Trevas logo" />
							</div>
						</div>
						<div className="boxes">
							<div className="box">
								<span className="icon">
									<SvgDevelop color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title User manual">
											User manual
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description User manual">
											Explore the VTL user manual
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>{' '}
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/user-manual')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>
							<div className="box">
								<span className="icon">
									<SvgDevelop color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title Reference manual">
											Reference manual
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description Reference manual">
											Explore the VTL reference manual
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>{' '}
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/reference-manual')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>
							<div className="box">
								<span className="icon">
									<SvgDevelop color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title EBNF">
											EBNF resources
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description EBNF">
											Discover VTL EBNF definition
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>{' '}
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/ebnf')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>
							<div className="box">
								<span className="icon">
									<SvgPdf color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title PDF">
											PDF documentation
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description PDF">
											Download the VTL documentation in PDF
										</Translate>
									</p>
									<span className="more">
										<Translate description="Download">Download</Translate>{' '}
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a
									href={useBaseUrl('/vtl-manual.pdf')}
									target="_blank"
									rel="noreferrer noopener"
									className="link"
								>
									<Translate description="See more">Download</Translate>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hero;
