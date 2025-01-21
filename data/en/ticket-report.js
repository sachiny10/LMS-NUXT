export default [
  {
  id: "introduction",
  title: "1. Ticket List Report",
  link:'https://demo.inboice.com/app/reports/view/list',
  description: `
      The "List Report" tab in the Invoice CRM allows users to generate comprehensive reports for service or installation tickets by applying a variety of filters. This feature is designed to provide detailed insights into ticket-related data based on specific criteria. The right-hand panel displays an extensive set of filter options, enabling users to filter tickets by parameters such as customer type, ticket type, status, channel/operator, current status, center, category, product, date range (from and to close dates), state, district, city, priority, and feedback status. Users can refine their search by selecting the appropriate filter criteria and clicking the "Apply Filter" button, which generates a customized report based on the specified conditions. Additionally, a "Reset Filter" option is available to clear all selected filters and start afresh. This tab is particularly useful for analyzing ticket data efficiently, as it limits results to a maximum of 2,000 records per request, encouraging users to apply precise filters for accurate and focused reporting.
  `,
  image: "/public/images/TicketR/list-report.png",
  },
  {
    id:'TAT',
    title:'2. TAT Report',
    description:`
    The TAT Report section in the Invoice CRM offers four distinct types of reports that provide comprehensive insights into the Turnaround Time (TAT) for service and installation tickets. Each report is tailored to analyze TAT data from different perspectives, enabling businesses to monitor and enhance operational efficiency effectively. Below is a detailed explanation of the four TAT report Types:-
    `,
    image:'/public/images/TicketR/TAT-Report.png'

  },
  {
    id:'average',
    title:'2.1 Average TAT',
    link:'https://demo.inboice.com/app/reports/view/count-tat/average',
    description:`
        The "Average TAT" tab in the Invoice CRM is designed to analyze and visualize the Turnaround Time (TAT) for service or installation tickets over a specific period. This tab provides detailed insights into ticket resolution times categorized into three segments: tickets resolved within 24 hours, within 96 hours, and those taking more than 96 hours. The interface displays two key metrics: **Action Hours** (the time taken for the initial action on tickets) and **Close Hours** (the total time taken to close tickets). These metrics are presented in percentage terms, offering users a clear understanding of efficiency in ticket handling.A dynamic graph is included below the metrics, which visually represents the comparative trends of Action Hours and Close Hours across the specified time segments. Users can interact with the graph by toggling data types to focus on specific metrics.The right-hand filter panel allows users to refine the data by applying multiple filters, such as customer type, ticket type, status, channel/operator, current status, center, category, product, date range, location (state, district, city), priority, and feedback status. Once the filters are applied, the results and graph are updated to reflect the specified conditions.This feature empowers businesses to evaluate their ticket resolution efficiency, identify areas for improvement, and make data-driven decisions to enhance customer satisfaction. It also limits the results to 2,000 records per request, encouraging users to use precise filters for targeted reporting.
    `,
    image:'/public/images/TicketR/Average-TAT.png'
  },
  {
    id:'monthwise',
    title:'2.2 Monthwise-TAT',
    link:'https://demo.inboice.com/app/reports/view/count-tat/month',
    description:`
    The Monthwise TAT Report provides a comprehensive overview of Turnaround Time (TAT) trends across different months, allowing organizations to evaluate performance improvements or identify inefficiencies over time. The report includes a filter panel accessible through the Toggle Filter option, enabling users to refine data based on specific parameters like customer type, ticket type, status, geographical details, product, and date range. The central table displays TAT metrics month-wise, with columns for Action Hours (time spent performing actions on tickets), Close Hours (time taken to fully resolve tickets), and Average TAT, offering detailed numerical insights into monthly performance. A visual line graph complements the data, plotting trends for Action Hours and Close Hours for a clear and intuitive analysis, with clickable labels to toggle data visibility.
    `,
    image:'/public/images/TicketR/monthwise-tat.png'
  },
  {
    id:'Centerwise',
    title:'2.3 Centerwise-TAT',
    link:'https://demo.inboice.com/app/reports/view/count-tat/center',
    description:`
    The Centerwise TAT report focuses on TAT metrics for tickets based on specific service centers. It helps businesses evaluate the performance of individual centers in terms of ticket resolution times. By comparing TAT data across multiple centers, managers can identify top-performing centers and those requiring additional support or training.
    `,
    image:'/public/images/TicketR/centerwise.png'
  },
  {
    id:'statewise',
    title:'2.4 Statewise-TAT',
    link:'https://demo.inboice.com/app/reports/view/count-tat/state',
    description:`
    The Statewise TAT report provides a geographical breakdown of TAT data, categorizing tickets based on the states in which they were created or resolved. This report is beneficial for organizations operating in multiple regions, as it enables them to analyze performance across different states and address region-specific challenges.
    `,
    image:'/public/images/TicketR/statewise.png'
  },
  {
    id:'status',
    title:'3. Status-Report',
    description:`
    The Status Report section provides a comprehensive overview of ticket activity and performance across various dimensions. It includes four key tabs:-
    `,
    image:'/public/images/TicketR/status-report.png'
  },
  {
    id:'Monthwise',
    title:'3.1 Monthwise-Status',
    link:'https://demo.inboice.com/app/reports/view/count-status/month',
    description:`
    The "Monthwise Status" tab provides a comprehensive overview of ticket activity across the past 12 months. The table presents a breakdown of ticket counts categorized by status (Closed, Pending, New, Canceled, Tagged, Flagged) for each month, along with a subtotal for each month. Additionally, a line graph visually represents the trend of ticket counts over time for each status category. Users can toggle the visibility of individual status lines in the graph for a customized view. This tab offers valuable insights into ticket trends, allowing for analysis of ticket volume, status distribution, and potential areas for improvement in ticket management.
    `,
    image:'/public/images/TicketR/monthwise-status.png'
  },
  {
    id:'Productwise',
    title:'3.2 Productwise-Status',
    link:'https://demo.inboice.com/app/reports/view/count-status/product',
    description:`
    The "Productwise Status" tab provides a detailed breakdown of ticket activity across the past 12 months, focusing on the product level. The table presents a breakdown of ticket counts categorized by status (Closed, Pending, New, Canceled, Tagged, Flagged) for each product. Additionally, it includes the product category and a subtotal for each product. This tab offers valuable insights into the performance of individual products in terms of ticket volume and status distribution. By analyzing this data, businesses can identify products with high ticket volumes, pinpoint areas of concern, and proactively address potential issues.
    `,
    image:'/public/images/TicketR/productwise.png'
  },
  {
    id:'centerwise',
    title:'3.3 Centerwise-Status',
    link:'https://demo.inboice.com/app/reports/view/count-status/center',
    description:`
    The "Centerwise Status" tab provides a breakdown of ticket activity across the past 12 months, focusing on the service center level. The table presents a breakdown of ticket counts categorized by status (Closed, Pending, New, Canceled, Tagged, Flagged) for each service center. Additionally, it includes a subtotal for each service center. This tab offers valuable insights into the performance of individual service centers in terms of ticket volume and status distribution. By analyzing this data, businesses can identify service centers with high ticket volumes, pinpoint areas of concern, and proactively address potential issues.
    `,
    image:'/public/images/TicketR/centerwise-status.png'
  },
  {
    id:'Statewise',
    title:'3.4 Statewise-Status',
    link:'https://demo.inboice.com/app/reports/view/count-status/state',
    description:`
    The "Statewise Status" tab provides a breakdown of ticket activity across the past 12 months, focusing on the state level. The table presents a breakdown of ticket counts categorized by status (Closed, Pending, New, Canceled, Tagged, Flagged) for each state. Additionally, it includes a subtotal for each state. This tab offers valuable insights into the performance of different states in terms of ticket volume and status distribution. By analyzing this data, businesses can identify states with high ticket volumes, pinpoint areas of concern, and proactively address potential issues.
    `,
    image:'/public/images/TicketR/statewise-status.png'
  }
  ];