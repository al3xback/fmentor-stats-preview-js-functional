const createHeaderEl = () => {
	const headerEl = createElement('header');

	const headerTitleEl = createElement(
		'h1',
		'sr-only',
		'Stats preview card component'
	);

	headerEl.appendChild(headerTitleEl);

	return headerEl;
};

const createCardEl = () => {
	const cardEl = createElement('article', 'card');

	/* card image */
	const cardImageWrapperEl = createElement('div', 'card__image');

	const cardImageInnerEl = createElement('div', 'card__image-inner');

	const cardImageEl = createElement('img', null, null, [
		createElementAttribute('src', './images/meeting.jpg'),
		createElementAttribute('alt', ''),
	]);

	cardImageInnerEl.appendChild(cardImageEl);

	cardImageWrapperEl.appendChild(cardImageInnerEl);

	/* card content */
	const cardContentEl = createElement('div', 'card__content');

	/* card title */
	const cardTitleEl = createElement('h2', 'card__title', 'Get ');

	const cardTitleSpanEl = createElement('mark', null, 'insight');

	cardTitleEl.append(cardTitleSpanEl, ' that help your business grow.');

	/* card description */
	const cardDescriptionEl = createElement(
		'p',
		'card__desc',
		'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
	);

	/* card statuses */
	const cardStatusListEl = createElement('ul', 'card__stats-list');

	const cardStatuses = [
		{
			label: 'Companies',
			amount: '10K+',
		},
		{
			label: 'Templates',
			amount: '314',
		},
		{
			label: 'Queries',
			amount: '12M+',
		},
	];

	for (const status of cardStatuses) {
		const cardStatusItemEl = createElement('li', 'card__stats-list-item');

		const cardStatusItemAmountEl = createElement(
			'span',
			'num',
			status.amount
		);

		const cardStatusItemTextEl = createElement(
			'span',
			'label',
			status.label
		);

		cardStatusItemEl.appendChild(cardStatusItemAmountEl);
		cardStatusItemEl.appendChild(cardStatusItemTextEl);

		cardStatusListEl.appendChild(cardStatusItemEl);
	}

	cardContentEl.appendChild(cardTitleEl);
	cardContentEl.appendChild(cardDescriptionEl);
	cardContentEl.appendChild(cardStatusListEl);

	cardEl.appendChild(cardImageWrapperEl);
	cardEl.appendChild(cardContentEl);

	return cardEl;
};

const createMainEl = () => {
	const mainEl = createElement('main');

	const mainContainerEl = createElement('div', 'container');

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	return mainEl;
};

const createFooterEl = () => {
	const footerEl = createElement('footer');

	const footerContainerEl = createElement('div', 'container');

	const footerTextEl = createElement('p', null, 'Challenge by ');

	const footerTextLinkCreatorEl = createElement(
		'a',
		'btn btn--link',
		'Frontend Mentor',
		[
			createElementAttribute(
				'href',
				'https://www.frontendmentor.io?ref=challenge'
			),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	const footerTextLinkCoderEl = createElement(
		'a',
		'btn btn--link',
		'al3xback',
		[
			createElementAttribute('href', 'https://github.com/al3xback'),
			createElementAttribute('rel', 'noopener'),
			createElementAttribute('target', '_blank'),
		]
	);

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return footerEl;
};

/* initApp */
const body = document.body;

const headerEl = createHeaderEl();
const mainEl = createMainEl();
const footerEl = createFooterEl();

body.appendChild(headerEl);
body.appendChild(mainEl);
body.appendChild(footerEl);
