
import React, { Component } from 'react';
import { CanvasJSChart, CanvasJS } from 'canvasjs-react-charts';
import axios from "axios";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamLeadCount: [],
      teleCallerCount: [],
      NotRespondingCount:[],
      CallBackCount:[],
      NotIntrestedCount:[],
      RenewedCount:[],
    }
    this.TeamLeadCount();
    this.TeleCallerCount();
    this.NotRespondingCount();
    this.CallBackCount();
    this.NotIntrestedCount();
    this.RenewedCount();

  }
  TeamLeadCount() {
    axios.get('http://localhost:4000/api/v6/userManage/getTeamLeadCount').then(response => {
      console.log(response.data);
      var countdata = response.data.result.length;
      console.log("countdata..", countdata)

      this.setState({
        teamLeadCount: countdata
      });

    });
  }

  TeleCallerCount() {
    axios.get('http://localhost:4000/api/v6/userManage/getTeleCallerCount').then(response => {
      console.log(response.data);
      var teleCallerCount = response.data.result.length;
      console.log("getTeleCallerCount..", teleCallerCount)

      this.setState({
        teleCallerCount: teleCallerCount
      });

    });
  }


  NotRespondingCount() {
    axios.get('http://localhost:4000/api/v7/policy/getNotRsponding').then(response => {
      console.log(response.data);
      var NotRespondingCount = response.data.result.length;
      console.log("NotRespondingCount..", NotRespondingCount)

      this.setState({
        NotRespondingCount: NotRespondingCount
      });

    });
  }


  CallBackCount() {
    axios.get('http://localhost:4000/api/v7/policy/getCallBackCount').then(response => {
      console.log(response.data);
      var getCallBackCount = response.data.result.length;
      console.log("getCallBackCount..", getCallBackCount)

      this.setState({
        CallBackCount: getCallBackCount
      });

    });
  }

  NotIntrestedCount() {
    axios.get('http://localhost:4000/api/v7/policy/getNotIntrestedCount').then(response => {
      console.log(response.data);
      var getNotIntrestedCount = response.data.result.length;
      console.log("getNotIntrestedCount..", getNotIntrestedCount)

      this.setState({
        NotIntrestedCount: getNotIntrestedCount
      });

    });
  }

  RenewedCount() {
    axios.get('http://localhost:4000/api/v7/policy/RenewedCount').then(response => {
      console.log(response.data);
      var RenewedCount = response.data.result.length;
      console.log("RenewedCount..", RenewedCount)

      this.setState({
        RenewedCount: RenewedCount
      });

    });
  }

  render() {
    const { teamLeadCount } = this.state;
    const { teleCallerCount } = this.state;
    const { NotRespondingCount } = this.state;
    const { CallBackCount } = this.state;
    const { NotIntrestedCount } = this.state;
    const { RenewedCount } = this.state;

    console.log("teamLeadCount..", teamLeadCount)
    const options = {
      theme: "light2",
      title: {
        text: "Insurance Application"
      },
      subtitles: [{
      }],
      axisY: {
        title: "Insurance Application",
        includeZero: true,
        suffix: "%",
        maximum: 100
      },
      data: [{
        type: "column",
        yValueFormatString: "#,###'%'",
        indexLabel: "{y}",
        dataPoints: [
          { label: "TeamLead", y: teamLeadCount },
          { label: "TeleCallers", y: teleCallerCount },
          { label: "Not Responed", y: NotRespondingCount },
          { label: "CallBack", y: CallBackCount},
          { label: "Not Intreseted", y: NotIntrestedCount},
          { label: "Renewed", y: RenewedCount },

        ]
      }]
    }
    return (
      <div>
        <CanvasJSChart options={options}
          onRef={ref => this.chart = ref}
        />
      </div>
    );
  }
}
export default BarChart; 
