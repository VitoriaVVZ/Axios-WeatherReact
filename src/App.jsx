import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WeatherCard } from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';
import * as S from './AppStyles';

export function App() {
  const { weatherData, loading, error } = useWeather();

  return (
    <S.PageWrapper>
      <Header />
      <S.MainContent>
        {loading && <S.StatusMessage>Carregando previsões...</S.StatusMessage>}
        {error && <S.StatusMessage>Erro ao buscar previsões: {error}</S.StatusMessage>}
        {!loading && !error && (
          <S.WeatherGrid> 
            {weatherData.map((city) => (
              <WeatherCard key={city.id} cityData={city} />
            ))}
          </S.WeatherGrid>
        )}
      </S.MainContent>
      <Footer />
      </S.PageWrapper>
  );
}