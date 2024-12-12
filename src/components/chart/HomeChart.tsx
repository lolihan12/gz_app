import React from 'react';
import { View, Text } from 'react-native';
import {
	LineChart,
	BarChart,
	PieChart,
	ProgressChart,
	ContributionGraph,
	StackedBarChart
 } from "react-native-chart-kit";
import { Dimensions } from 'react-native';

const HomeChart = () => {
	return (
		<View>
			<View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
				<View>
					<Text>입증 목표</Text>
					<Text>신뢰성 : 40,000km</Text>
					<Text>가용성 : 99%</Text>
					<Text>유지보수성 : 0.22h</Text>
					<Text>입증기간 : 오늘 ~ 내일</Text>
				</View>
				<View>
					<Text>입증 현황</Text>
					<Text>신뢰성 : 43,101km</Text>
					<Text>가용성 : 96.58%</Text>
					<Text>유지보수성 : 0.22h</Text>
					<Text>입증기간 : 오늘 ~ 내일</Text>
				</View>
			</View>
			<Text> 장치별 서비스고장 건수</Text>
			<BarChart
				data={{
					labels: ["니장치", "내장치", "우리장치", "모르는장치", "잃어버린장치", "훔친장치"],
					datasets: [
					{
						data: [
							5,
							10,
							12,
							1,
							9,
							6
						]
					}
					]
				}}
				width={Dimensions.get("window").width} // from react-native
				height={Dimensions.get("window").height*0.73}
				yAxisLabel=""
				yAxisSuffix="건"
				yAxisInterval={1} // optional, defaults to 1
				// yLabelsOffset={25}
				chartConfig={{
					backgroundColor: "#a7b5bb",
					backgroundGradientFrom: "#27d174",
					backgroundGradientTo: "#ce94df",
					decimalPlaces: 0, // optional, defaults to 2dp
					color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
					},
					// propsForDots: {
					// 	r: "6",
					// 	strokeWidth: "2",
					// 	stroke: "#ffa726"
					// }
				}}
				// bezier
				style={{
					marginVertical: 8,
					borderRadius: 16
				}}
			/>
		</View>
	);
};

export default HomeChart;