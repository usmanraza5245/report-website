// usertable.js
import React from 'react';
import MUIDataTable from 'mui-datatables';

const columns = [
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: 'company',
    label: 'Company',
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: 'city',
    label: 'City',
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: 'state',
    label: 'State',
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  { name: 'Joe James', company: 'Test Corp', city: 'Yonkers', state: 'NY' },
  { name: 'John Walsh', company: 'Test Corp', city: 'Hartford', state: 'CT' },
  { name: 'Bob Herm', company: 'Test Corp', city: 'Tampa', state: 'FL' },
  { name: 'James Houston', company: 'Test Corp', city: 'Dallas', state: 'TX' },
  { name: 'Anna Smith', company: 'XYZ Inc', city: 'Los Angeles', state: 'CA' },
  { name: 'Michael Johnson', company: 'ABC Corp', city: 'Chicago', state: 'IL' },
  { name: 'Emily Davis', company: 'XYZ Inc', city: 'Houston', state: 'TX' },
  { name: 'William Anderson', company: 'ABC Corp', city: 'Phoenix', state: 'AZ' },
  { name: 'Elizabeth Martinez', company: 'XYZ Inc', city: 'Philadelphia', state: 'PA' },
  { name: 'David Thompson', company: 'ABC Corp', city: 'San Antonio', state: 'TX' },
  { name: 'Jessica Wilson', company: 'XYZ Inc', city: 'San Diego', state: 'CA' },
  { name: 'Christopher Taylor', company: 'ABC Corp', city: 'San Jose', state: 'CA' },
  { name: 'Sarah Anderson', company: 'XYZ Inc', city: 'Jacksonville', state: 'FL' },
  { name: 'Matthew Thomas', company: 'ABC Corp', city: 'Indianapolis', state: 'IN' },
  { name: 'Lauren Moore', company: 'XYZ Inc', city: 'San Francisco', state: 'CA' },
  { name: 'Kevin Jackson', company: 'ABC Corp', city: 'Columbus', state: 'OH' },
  { name: 'Amanda White', company: 'XYZ Inc', city: 'Charlotte', state: 'NC' },
  { name: 'Daniel Harris', company: 'ABC Corp', city: 'Fort Worth', state: 'TX' },
  { name: 'Nicole Martin', company: 'XYZ Inc', city: 'Detroit', state: 'MI' },
  { name: 'Justin Thompson', company: 'ABC Corp', city: 'El Paso', state: 'TX' },
  { name: 'Samantha Garcia', company: 'XYZ Inc', city: 'Memphis', state: 'TN' },
  { name: 'Eric Martinez', company: 'ABC Corp', city: 'Seattle', state: 'WA' },
  { name: 'Rachel Hernandez', company: 'XYZ Inc', city: 'Denver', state: 'CO' },
  { name: 'Brandon Lopez', company: 'ABC Corp', city: 'Washington', state: 'DC' },
  { name: 'Kelly Young', company: 'XYZ Inc', city: 'Boston', state: 'MA' },
  { name: 'Jesse Scott', company: 'ABC Corp', city: 'Nashville', state: 'TN' },
  { name: 'Bryan Nguyen', company: 'XYZ Inc', city: 'Baltimore', state: 'MD' },
  { name: 'Heather Kim', company: 'ABC Corp', city: 'Louisville', state: 'KY' },
  { name: 'Ashley Lewis', company: 'XYZ Inc', city: 'Milwaukee', state: 'WI' },
  { name: 'Jonathan Lee', company: 'ABC Corp', city: 'Portland', state: 'OR' },
  { name: 'Megan King', company: 'XYZ Inc', city: 'Las Vegas', state: 'NV' },
  { name: 'Patrick Nguyen', company: 'ABC Corp', city: 'Oklahoma City', state: 'OK' },
  { name: 'Cynthia Green', company: 'XYZ Inc', city: 'Albuquerque', state: 'NM' },
  { name: 'Jordan Hall', company: 'ABC Corp', city: 'Tucson', state: 'AZ' },
  { name: 'Kyle Brown', company: 'XYZ Inc', city: 'Fresno', state: 'CA' },
  { name: 'Melissa Clark', company: 'ABC Corp', city: 'Sacramento', state: 'CA' },
  { name: 'Alexis Baker', company: 'XYZ Inc', city: 'Long Beach', state: 'CA' },
  { name: 'Gregory Perez', company: 'ABC Corp', city: 'Kansas City', state: 'MO' },
  { name: 'Chelsea Stewart', company: 'XYZ Inc', city: 'Mesa', state: 'AZ' },
  { name: 'Dylan Morris', company: 'ABC Corp', city: 'Virginia Beach', state: 'VA' },
  { name: 'Courtney Jenkins', company: 'XYZ Inc', city: 'Atlanta', state: 'GA' },
  { name: 'Randy Ward', company: 'ABC Corp', city: 'Omaha', state: 'NE' },
  { name: 'Kristen Cox', company: 'XYZ Inc', city: 'Raleigh', state: 'NC' },
  { name: 'Terry Baker', company: 'ABC Corp', city: 'Miami', state: 'FL' },
  { name: 'Kimberly Gonzales', company: 'XYZ Inc', city: 'Oakland', state: 'CA' },
  { name: 'Jared Barnes', company: 'ABC Corp', city: 'Minneapolis', state: 'MN' },
  { name: 'Kathryn Price', company: 'XYZ Inc', city: 'Tulsa', state: 'OK' },
  { name: 'Angela Ramirez', company: 'ABC Corp', city: 'Wichita', state: 'KS' },
  { name: 'Dustin Ward', company: 'XYZ Inc', city: 'New Orleans', state: 'LA' },
  { name: 'Holly Richardson', company: 'ABC Corp', city: 'Arlington', state: 'TX' },
  { name: 'Cameron Simmons', company: 'XYZ Inc', city: 'Cleveland', state: 'OH' },
  { name: 'Jenna Patterson', company: 'ABC Corp', city: 'Bakersfield', state: 'CA' },
  { name: 'Allison Russell', company: 'XYZ Inc', city: 'Anaheim', state: 'CA' },
  { name: 'Ronald Griffin', company: 'ABC Corp', city: 'Honolulu', state: 'HI' }
];

const options = {
  filterType: 'checkbox'
};

const UserTable = () => {
  return <MUIDataTable title={'Users List'} data={data} columns={columns} options={options} />;
};

export default UserTable;
