/**
 * Created by akshaybindal on 22/07/17.
 */


import './input.scss';
import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

export class InputBox extends Component {

	constructor(props) {
		super(props);
		const {showClearIcon, value} = props;
		this.state = {
			showCrossIcon : showClearIcon,
			value: value
		};
	}
	componentWillReceiveProps(nextProps){
		if(this.props.value !== nextProps.value){
			this.setState({value: nextProps.value});
		}
	}
	handleFocus = () => {
		this.setState({
			showCrossIcon : true
		});
		if (this.props.onFocusHandler) {
			this.props.onFocusHandler();
		}
	}

	handleBlur = () => {
		this.setState({
			showCrossIcon : false
		});
		if (this.props.onBlurHandler) {
			this.props.onBlurHandler();
		}
	};

	handleClearClick = () => {
		this.setState({value: ''});
		this.props.onChangeHandler({target:{value:''}});
	};

	onPasteHandler=() => {
		this.setState({
			pasteEvent: true
		});
	};

	onChangeHandler = (e) => {
		let [targetValue,  currentTargetValue, relatedTargetValue]= _.at(e,['target.value','currentTarget.value','relatedTarget.value']);

		const { pasteEvent ,value} = this.state;
		const {regex ,type} = this.props;
		if(!_.isEmpty(regex) && !_.isEmpty(targetValue)){
			let reg = new RegExp(regex);
			if(!reg.test(targetValue)) {
				let temp = targetValue;
				while(temp){
					if(reg.test(temp)){
						targetValue = temp;
						break;
					}
					else{
						temp = temp.slice(0 , -1);
					}

				}
				_.isEmpty(temp) && (targetValue = temp);

			}
		}

		this.setState({
			value: targetValue,
			pasteEvent: false
		});

		const eventObj = {
			target: {value: targetValue},
			currentTarget: {value: currentTargetValue},
			relatedTarget: {value: relatedTargetValue},

		};

		this.props.onChangeHandler(eventObj);

	};
	render() {
		const { showCrossIcon, value } = this.state;
		let { placeholderString, maxLength,onClickHandler, autoComplete,
			onKeyDownHandler, readOnly, type, refCb, showClearIcon, overRideClass ,disableCopyPaste} = this.props;
		let inputContainerClass = `group ${overRideClass}`;
		inputContainerClass = readOnly ? `group ${overRideClass}` : inputContainerClass;
		const buttonCrossClass = (showCrossIcon) ? `cross` : `cross hidden`;
		return (
			<div className={inputContainerClass}>
				<input
					value={value}
					type={type}
					onChange={this.onChangeHandler}
					maxLength={maxLength}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					ref={ (input) => {refCb(input)}}
					onClick={onClickHandler}
					onKeyDown={onKeyDownHandler}
					readOnly={readOnly}
					onPaste={disableCopyPaste && this.onPasteHandler}
					autoComplete={autoComplete}
					placeholder={placeholderString}
				/>
				<i className='bar'></i>
				{
					showClearIcon && !sampleBill && !!value && <div className={buttonCrossClass}>
						<div>

							<i className='icon-cross' onMouseDown={this.handleClearClick} onTouchStart={this.handleClearClick}>
								<span className='path1'></span>
								<span className='path2'></span>
							</i>
						</div>
					</div>
				}
			</div>
		);
	}
}

InputBox.propTypes = {
	placeholderString: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	autoComplete: PropTypes.string,
	onChangeHandler: PropTypes.func.isRequired,
	maxLength: PropTypes.string,
	onBlurHandler: PropTypes.func,
	onFocusHandler: PropTypes.func,
	refStr: PropTypes.string,
	onClickHandler: PropTypes.func,
	onKeyDownHandler: PropTypes.func,
	readOnly: PropTypes.bool,
	type: PropTypes.string,
	refCb: PropTypes.func,
	showClearIcon: PropTypes.bool,
	overRideClass : PropTypes.string
};

InputBox.defaultProps = {
	placeholderString: '',
	value: '',
	maxLength: '30',
	refStr: 'textInput',
	onClickHandler: () => {},
	onKeyDownHandler: () => {},
	readOnly: false,
	type: 'text',
	refCb: () => {},
	showClearIcon: false,
	overRideClass:''
};

export default InputBox;

