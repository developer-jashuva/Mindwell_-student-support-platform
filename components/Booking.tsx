
import React, { useState } from 'react';
import { COUNSELORS } from '../constants';
import { Counselor } from '../types';

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

const Booking: React.FC = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(COUNSELORS[0]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleBooking = () => {
    if(selectedCounselor && selectedDate && selectedTime){
      setIsConfirmed(true);
    }
  }

  const handleNewBooking = () => {
    setIsConfirmed(false);
    setSelectedCounselor(COUNSELORS[0]);
    setSelectedDate(new Date());
    setSelectedTime(null);
  }

  if (isConfirmed) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg mx-auto text-center">
        <h2 className="text-2xl font-bold text-secondary mb-4">Appointment Confirmed!</h2>
        <p className="text-gray-600 mb-2">Your appointment with <span className="font-semibold">{selectedCounselor?.name}</span> is scheduled for:</p>
        <p className="text-lg font-semibold text-primary mb-6">{selectedDate.toDateString()} at {selectedTime}</p>
        <p className="text-sm text-gray-500 mb-6">You will receive a confidential confirmation email shortly. If you need to reschedule, please contact the student wellness center.</p>
        <button onClick={handleNewBooking} className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Book a Confidential Appointment</h2>
      <p className="text-gray-500 mb-6">Your privacy is our priority. All sessions are confidential.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">1. Select a Counselor</h3>
          <div className="space-y-4">
            {COUNSELORS.map(c => (
              <div
                key={c.id}
                onClick={() => setSelectedCounselor(c)}
                className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${selectedCounselor?.id === c.id ? 'border-primary bg-blue-50' : 'border-gray-200'}`}
              >
                <img src={c.imageUrl} alt={c.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-800">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">2. Choose Date & Time</h3>
          {/* Note: This is a simplified date picker for demonstration */}
          <input
            type="date"
            className="w-full p-2 border rounded-md mb-4"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => setSelectedDate(new Date(e.target.value))}
            min={new Date().toISOString().split('T')[0]}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-md text-sm text-center border-2 transition-colors ${selectedTime === time ? 'bg-primary text-white border-primary' : 'bg-white hover:bg-gray-100 border-gray-200'}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <button
          onClick={handleBooking}
          disabled={!selectedCounselor || !selectedDate || !selectedTime}
          className="w-full bg-secondary text-white py-3 px-4 rounded-md font-bold hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
