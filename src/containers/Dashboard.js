import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import {connect} from "react-redux";
import * as currencySelectors from "../store/currency/selectors";
import * as currencyActions from "../store/currency/actionCreators";


@connect(
  (state) => {
    return {
      ...state,
      cudate: currencySelectors.getCurrency(state),
    };
  }
)
export class Dashboard extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object,
  };
  static propTypes = {
    cudate: React.PropTypes.array,

  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  fetchCurrency() {
    this.context.store.dispatch(currencyActions.fetchCurrency());
  }

  render(){
    const {
      cudate
    } = this.props;

    const data = {
      labels: [...Array(20).keys()],
      datasets: [
        {
          label: 'ETH-Trade-Data',
          backgroundColor: 'rgba(255,99,132,0)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 6,
          hoverBackgroundColor: 'rgba(255,99,199,1)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: cudate
        }
      ]
    };


    const options = {
      annotation: {
        annotations: [{
          drawTime: 'afterDatasetsDraw',
          borderColor: 'yellow',
          borderDash: [2, 2],
          borderWidth: 1,
          mode: 'vertical',
          type: 'line',

          value: 10,
          scaleID: 'x-axis-0',

        }]
      },
      maintainAspectRation: false
    };

    return(
      <Line
        data={ data }
        width={100}
        height={50}
        options={options}
      />
    )
  }
}
