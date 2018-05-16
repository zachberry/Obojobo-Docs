const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl(img) {
	return siteConfig.baseUrl + 'img/' + img
}

function docUrl(doc, language) {
	return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
}

function pageUrl(page, language) {
	return siteConfig.baseUrl + (language ? language + '/' : '') + page
}

class Button extends React.Component {
	render() {
		return (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={this.props.href} target={this.props.target}>
					{this.props.children}
				</a>
			</div>
		)
	}
}

Button.defaultProps = {
	target: '_self'
}

const SplashContainer = props => (
	<div className="homeContainer">
		<div className="homeSplashFade">
			<div className="wrapper homeWrapper">{props.children}</div>
		</div>
	</div>
)

const Logo = props => (
	<div className="projectLogo">
		<img src={props.img_src} />
	</div>
)

const ProjectTitle = props => (
	<h2 className="projectTitle">
		<img src={props.img_src} />
		<small>{siteConfig.tagline}</small>
	</h2>
)

const PromoSection = props => (
	<div className="section promoSection">
		<div className="promoRow">
			<div className="pluginRowBlock">{props.children}</div>
		</div>
	</div>
)

class HomeSplash extends React.Component {
	render() {
		let language = this.props.language || ''
		return (
			<SplashContainer>
				<div className="inner">
					<ProjectTitle img_src={imgUrl('obojobo_blue.svg')} />
					<PromoSection>
						<Button href={docUrl('obo_summary.html', language)}>View Documentation</Button>
					</PromoSection>
				</div>
			</SplashContainer>
		)
	}
}

const Block = props => (
	<Container padding={['bottom', 'top']} id={props.id} background={props.background}>
		<GridBlock align="center" contents={props.children} layout={props.layout} />
	</Container>
)

const Features = props => (
	<Block layout="fourColumn">
		{[
			{
				content:
					'A content platform that uses design and ui/ux principles to provide a satisfying & enjoyable student experience.',
				title: 'User Experience'
			},
			{
				content:
					'A low barrier of entry for content creators. Building modules should be as easy as writing a document in Word.',
				title: 'Simple to use'
			},
			{
				content: 'Powerful practice & assessment tools.',
				title: 'Powerful Tools'
			}
		]}
	</Block>
)

const FeatureCallout = props => (
	<div className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
		<h2>Project Mission / Philosophy Obojobo Next</h2>
	</div>
)

class Index extends React.Component {
	render() {
		let language = this.props.language || ''

		return (
			<div>
				<HomeSplash language={language} />
				<div className="mainContainer">
					<FeatureCallout />
					<Features />
				</div>
			</div>
		)
	}
}

module.exports = Index
