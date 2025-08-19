import React from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';

const Locale = () => {
  const { locationName } = useParams<{ locationName: string }>();
  
  // Decode the location name from URL
  const decodedLocationName = locationName ? decodeURIComponent(locationName) : 'Unknown Location';

  return (
    <PageLayout title={decodedLocationName}>
      <div className="bg-card rounded-lg p-6 shadow">
        <p className="text-muted-foreground">
          This page will display detailed information about {decodedLocationName} once the database is implemented.
        </p>
      </div>
    </PageLayout>
  );
};

export default Locale;