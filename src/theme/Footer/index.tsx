/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface FooterLinkProps {
	[key: string]: any;
	to: string;
	label: string;
	href: string;
	prependBaseUrlToHref: boolean;
}

function Footer() {
	const { footer } = useThemeConfig();
	const { copyright } = footer ?? {};

	if (!footer) {
		return null;
	}

	return (
		<footer
			className={clsx('footer', {
				'footer--dark': footer.style === 'dark',
			})}
		>
			<div className="container">
				<div className="row">
					<div className="col col--3"></div>
					<div className="col col--6 footer__items">
						{copyright ? (
							<div
								className="footer__copyright" // Developer provided the HTML, so assume it's safe.
								dangerouslySetInnerHTML={{
									__html: copyright,
								}}
							/>
						) : null}
					</div>
					<div className="col col--3 centered-content footer__items">
						<span className="footer__item">
							<a href="mailto:contact@sdmx.org">
								<img src={useBaseUrl('img/mail.svg')} alt="Mail to MS" />
							</a>
						</span>
						<span className="footer__item">
							<a
								href="https://github.com/Making-Sense-Info/VTL-Docs"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Github"
							>
								<img src={useBaseUrl('img/github.svg')} alt="Github" />
							</a>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
