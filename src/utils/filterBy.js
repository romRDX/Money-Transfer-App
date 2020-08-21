export default function filterByPlan(data, plan){
  if(plan !== 'All'){
    const filteredData = data.filter((data) => data.data.plan === plan);
    return filteredData;
  } else {
    return data;
  }
};
