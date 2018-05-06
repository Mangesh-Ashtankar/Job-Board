import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './midsection.css';

class MidSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render(){
        return(
            <div>
                <section id="SECTION_1">
	<div id="DIV_2">
		<div id="DIV_3">
			<div id="DIV_4">
				<div id="DIV_5">
					<h2 id="H2_6">
						Find a <span id="SPAN_7">job</span> you will <span id="SPAN_8">love</span>.
					</h2>
					<form id="FORM_9" method="get" action="#">
						<div id="DIV_10">
							<div id="DIV_11">
								<div id="DIV_12">
									<div id="DIV_13">
										 
										<label for="profession" id="LABEL_14">
											Profession
										</label>
										<input type="text" id="INPUT_15" name="profession" placeholder="Profession you are looking for" />
									</div>
								</div>
								<div id="DIV_16">
									<div id="DIV_17">
										 
										<label for="location" id="LABEL_18">
											Location
										</label>
										<input type="text" id="INPUT_19" name="location" placeholder="Any particular location?" />
									</div>
								</div>
								<div id="DIV_20">
									 
									<button type="submit" name="submit" id="BUTTON_21">
										<i id="I_22"></i>
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
            </div>
        );
    }
}
export default MidSection;
