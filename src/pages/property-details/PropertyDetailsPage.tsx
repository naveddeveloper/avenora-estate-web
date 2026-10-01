import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import PropertyGallery from '@/features/properties/components/details/PropertyGallery';
import PropertySummary from '@/features/properties/components/details/PropertySummary';
import PropertyOverview from '@/features/properties/components/details/PropertyOverview';
import Amenities from '@/features/properties/components/details/Amenities';
import FloorPlanAndLocation from '@/features/properties/components/details/FloorPlanAndLocation';
import SimilarProperties from '@/features/properties/components/details/SimilarProperties';
import { X } from 'lucide-react';
import { useAuth } from '@/features/auth/context/AuthContext';
import { properties } from '@/features/properties/data/properties.data';

interface PropertyDetailsPageProps {
}

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = () => {
    const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  
  const property = properties.find(p => p.id === Number(id));
  
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  const [scheduleData, setScheduleData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    date: '',
    time: ''
  });

  const [infoData, setInfoData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    message: ''
  });

  useEffect(() => {
    if (user) {
      setScheduleData(prev => ({ ...prev, name: user.name, phone: user.phone, email: user.email }));
      setInfoData(prev => ({ ...prev, name: user.name, phone: user.phone, email: user.email }));
    }
  }, [user]);

  if (!property) {
    return <Navigate to="/properties" replace />;
  }

  return (
    <div className="bg-[#FAF8F4] min-h-[100vh] pb-[60px] pt-[72px]">
      <Breadcrumbs property={property} />

      <main className="property-main max-w-[1400px] m-[0_auto] p-[0_24px]">
        
        {/* Top Split Section */}
        <div className="property-main-grid grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-[24px] mb-[40px]">
          <div>
            <PropertyGallery property={property} />
          </div>
          <div>
            <PropertySummary 
              property={property}
              onScheduleVisit={() => setShowScheduleModal(true)} 
              onGetInfo={() => setShowInfoModal(true)} 
            />
          </div>
        </div>

        {/* Details Content */}
        <PropertyOverview property={property} />
        <Amenities />
        <FloorPlanAndLocation property={property} />

        {/* Similar Properties */}
        <SimilarProperties currentPropertyId={property.id} />

      </main>

      {/* Modals */}
      {showScheduleModal && (
        <div className="fixed bg-[rgba(8,_35,_63,_0.4)] flex items-center justify-center z-[1000] p-[24px] [inset:0] [backdrop-filter:blur(4px)]">
          <div className="bg-[white] rounded-[16px] p-[24px] sm:p-[40px] w-[100%] max-w-[500px] relative">
            <button 
              onClick={() => setShowScheduleModal(false)} className="absolute top-[20px] right-[20px] bg-transparent border-none cursor-pointer text-[#65758B]"
            >
              <X size={24} />
            </button>
            <h2 className="font-serif text-[1.5rem] sm:text-[2rem] text-[#08233F] m-[0_0_24px_0]">Schedule a Visit</h2>
            <div className="flex flex-col gap-[16px]">
              <input type="text" placeholder="Full Name" className="modal-input" value={scheduleData.name} onChange={e => setScheduleData({...scheduleData, name: e.target.value})} />
              <input type="tel" placeholder="Phone Number" className="modal-input" value={scheduleData.phone} onChange={e => setScheduleData({...scheduleData, phone: e.target.value})} />
              <input type="email" placeholder="Email" className="modal-input" value={scheduleData.email} onChange={e => setScheduleData({...scheduleData, email: e.target.value})} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <input type="date" className="modal-input" value={scheduleData.date} onChange={e => setScheduleData({...scheduleData, date: e.target.value})} />
                <input type="time" className="modal-input" value={scheduleData.time} onChange={e => setScheduleData({...scheduleData, time: e.target.value})} />
              </div>
              <button className="btn-modal mt-[8px]" onClick={() => {
                alert('Visit scheduled successfully!');
                setShowScheduleModal(false);
              }}>Schedule Visit &rarr;</button>
            </div>
          </div>
        </div>
      )}

      {showInfoModal && (
        <div className="fixed bg-[rgba(8,_35,_63,_0.4)] flex items-center justify-center z-[1000] p-[24px] [inset:0] [backdrop-filter:blur(4px)]">
          <div className="bg-[white] rounded-[16px] p-[24px] sm:p-[40px] w-[100%] max-w-[500px] relative">
            <button 
              onClick={() => setShowInfoModal(false)} className="absolute top-[20px] right-[20px] bg-transparent border-none cursor-pointer text-[#65758B]"
            >
              <X size={24} />
            </button>
            <h2 className="font-serif text-[1.5rem] sm:text-[2rem] text-[#08233F] m-[0_0_24px_0]">Get More Info</h2>
            <div className="flex flex-col gap-[16px]">
              <input type="text" placeholder="Name" className="modal-input" value={infoData.name} onChange={e => setInfoData({...infoData, name: e.target.value})} />
              <input type="tel" placeholder="Phone" className="modal-input" value={infoData.phone} onChange={e => setInfoData({...infoData, phone: e.target.value})} />
              <input type="email" placeholder="Email" className="modal-input" value={infoData.email} onChange={e => setInfoData({...infoData, email: e.target.value})} />
              <textarea placeholder="Message" rows={4} value={infoData.message} onChange={e => setInfoData({...infoData, message: e.target.value})} className="modal-input [resize:none]"></textarea>
              <button className="btn-modal mt-[8px]" onClick={() => {
                alert('Information requested successfully!');
                setShowInfoModal(false);
              }}>Request Information &rarr;</button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default PropertyDetailsPage;
