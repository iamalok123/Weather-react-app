import windImg from "../assets/wind.png";
import humidityImg from "../assets/humidity.png";
import visibilityImg from "../assets/visibility.png";
import sunriseImg from "../assets/sunrise.png";
import sunsetImg from "../assets/sunset.png";

const Icon = ({ src, alt }) => <img src={src} alt={alt} className="h-8 w-8" />;

export const WindIcon = () => <Icon src={windImg} alt="Wind" />;
export const HumidityIcon = () => <Icon src={humidityImg} alt="Humidity" />;
export const VisibilityIcon = () => (
  <Icon src={visibilityImg} alt="Visibility" />
);
export const SunriseIcon = () => <Icon src={sunriseImg} alt="Sunrise" />;
export const SunsetIcon = () => <Icon src={sunsetImg} alt="Sunset" />;
