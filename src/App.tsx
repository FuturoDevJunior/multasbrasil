import React, { useState, useCallback } from 'react';
import { Search, Car, AlertTriangle } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';
import { Branding } from './components/Branding';
import { useTranslation } from './hooks/useTranslation';
import { useViolations } from './hooks/useViolations';
import type { ViolationData } from './types';

function ViolationsApp() {
  const { t } = useTranslation();
  const { data, loading, error, searchViolations } = useViolations();
  const [plate, setPlate] = useState('');

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    await searchViolations(plate);
  }, [plate, searchViolations]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 relative">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Car className="w-10 h-10 text-blue-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">{t('title')}</h1>
            </div>
            <LanguageSelector />
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  placeholder={t('searchPlaceholder')}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  maxLength={7}
                />
                {plate && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                    {plate.length}/7
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center transition-colors"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t('searching')}
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    {t('search')}
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 animate-fadeIn">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          )}

          {data && (
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-gray-600">{t('vehicle.plate')}</p>
                  <p className="text-lg font-semibold">{data.placa}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-gray-600">{t('vehicle.chassis')}</p>
                  <p className="text-lg font-semibold">{data.chassi}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-gray-600">{t('vehicle.renavam')}</p>
                  <p className="text-lg font-semibold">{data.renavam}</p>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-4 flex items-center">
                {t('violations.title')}
                <span className="ml-2 px-2 py-0.5 text-sm bg-blue-100 text-blue-700 rounded-full">
                  {data.multas.length}
                </span>
              </h2>
              
              <div className="space-y-4">
                {data.multas.map((multa, index) => (
                  <div 
                    key={index} 
                    className="border rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-blue-200"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.agency')}</p>
                        <p className="font-medium">{multa.orgao}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.date')}</p>
                        <p className="font-medium">{multa.data}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600">{t('violations.description')}</p>
                        <p className="font-medium">{multa.descricao}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.amount')}</p>
                        <p className="font-medium text-red-600">{multa.valor}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.status')}</p>
                        <div className="flex items-center">
                          <span className={`w-2 h-2 rounded-full mr-2 ${multa.status.toLowerCase().includes('pago') ? 'bg-green-500' : 'bg-yellow-500'}`} />
                          <p className="font-medium">{multa.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!data && !error && (
            <div className="text-center py-12 text-gray-500">
              <Car className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg">{t('searchPlaceholder')}</p>
            </div>
          )}
        </div>
      </div>
      <Branding />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ViolationsApp />
    </LanguageProvider>
  );
}