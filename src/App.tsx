import React, { useState, useCallback } from 'react';
import { Search, Car, AlertTriangle } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Branding } from './components/Branding';
import { useTranslation } from './hooks/useTranslation';
import { useViolations } from './hooks/useViolations';
import { formatViolationDate, formatCurrency } from './utils/validators';
import type { ViolationData } from './types';


function ViolationsApp() {
  const { t } = useTranslation();
  const { data, loading, error, searchViolations } = useViolations();
  const [plate, setPlate] = useState('');
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleSearch = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    await searchViolations(plate);
  }, [plate, searchViolations]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 relative overflow-x-hidden" role="main">
      {showDisclaimer && (
        <div className="bg-gradient-to-r from-blue-600/95 to-blue-800/95 backdrop-blur-sm p-4 fixed top-0 left-0 right-0 z-50 shadow-lg animate-fadeIn">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center pr-12 relative">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="w-6 h-6 text-yellow-300 mr-2 animate-pulse" aria-hidden="true" />
                <p className="text-white font-bold text-lg">
                  Aviso Importante
                </p>
              </div>
              <p className="text-white/90 text-sm md:text-base max-w-2xl">
                Este é um site para fins exclusivamente educacionais. Não nos responsabilizamos por qualquer uso indevido das informações. Para testes, utilize placas como ABC1234 ou XYZ5678.
              </p>
              <button
                onClick={() => setShowDisclaimer(false)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-1.5 hover:bg-white/10 transition-all duration-200"
                aria-label="Fechar aviso"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative group mb-4">
              <Car className="w-16 h-16 text-blue-600 transform transition-all duration-300 group-hover:scale-110" aria-hidden="true" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-tight">{t('title')}</h1>
          </div>
          <form onSubmit={handleSearch} className="w-full" aria-label={t('searchPlaceholder')}>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  placeholder={t('searchPlaceholder')}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  maxLength={7}
                  aria-label={t('vehicle.plate')}
                  aria-invalid={error ? 'true' : 'false'}
                  disabled={loading}
                />
                {plate && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium" aria-live="polite">
                    {plate.length}/7
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={loading || plate.length === 0}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
                aria-busy={loading}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" role="progressbar" />
                    {t('searching')}
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" aria-hidden="true" />
                    {t('search')}
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-sm animate-fadeIn" role="alert">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" aria-hidden="true" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}

          {data && (
            <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn hover:shadow-xl transition-shadow duration-300" role="region" aria-label={t('violations.title')}>
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
                    className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.agency')}</p>
                        <p className="font-medium">{multa.orgao}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.date')}</p>
                        <p className="font-medium">{formatViolationDate(multa.data)}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-600">{t('violations.description')}</p>
                        <p className="font-medium">{multa.descricao}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.amount')}</p>
                        <p className="font-medium text-red-600">{formatCurrency(multa.valor)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{t('violations.status')}</p>
                        <div className="flex items-center">
                          <span 
                            className={`w-2 h-2 rounded-full mr-2 ${multa.status.toLowerCase().includes('pago') ? 'bg-green-500' : 'bg-yellow-500'}`}
                            aria-hidden="true"
                          />
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
            <div className="text-center py-16 text-gray-500" role="status">
              <div className="relative group inline-block">
                <Car className="w-20 h-20 mx-auto mb-6 opacity-20 transform transition-all duration-500 group-hover:scale-110 group-hover:opacity-40" aria-hidden="true" />
                <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
              </div>
              <p className="text-xl transition-colors duration-300 hover:text-gray-700">{t('searchPlaceholder')}</p>
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