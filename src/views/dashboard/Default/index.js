// import { useEffect, useState } from 'react';

// material-ui
import { Box, Grid } from '@mui/material';

// project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import UserTable from 'Components/UserTable';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  // const [isLoading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  return (
    <Box>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <UserTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
