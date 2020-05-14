import React from 'react';
import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';
import Container from '../Core/Container';

const entriesGroup = [
  {key: '1', description: 'Alimentaçãoo:', amount: '$201'},
  {key: '2', description: 'Combustível:', amount: '$120'},
  {key: '3', description: 'Aluguel:', amount: '$29'},
  {key: '4', description: 'Lazer:', amount: '$110'},
  {key: '5', description: 'Outros:', amount: '$192'},
];

const EntrySummary = ({onPressActionButton}) => {
  return (
    <Container
      title="Categorias"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGroup={entriesGroup} />
    </Container>
  );
};

export default EntrySummary;
