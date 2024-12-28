import Button from "../atoms/Button";
import vectorSvg from '../../assets/icons/vector.svg'
import locationIcon from '../../assets/icons/location.svg'

interface WorkspaceCardProps {
    name: string;
    location: string;
    image: string;
    day_pass_price: number,
    type: 'Workspace' | 'Honeykomb' | 'Platinum' | 'Campus' | 'Premium';
    dayPass: {
        price: number;
        duration: string;
    };
    bulkPass: {
        price: number;
        duration: string;
        discount: number;
    };
}
const ButtonIcon = <div className="flex" >
    <img src={vectorSvg} alt='vector' style={{ opacity: '0.3' }} />
    <img src={vectorSvg} alt='vector' style={{ opacity: '0.6' }} />
    <img src={vectorSvg} alt='vector' />
</div>

const WorkspaceCard: React.FC<WorkspaceCardProps> = ({
    location,
    image,
    type,
    dayPass,
    bulkPass,
    name,
    day_pass_price,
    ...rest
}) => {
    console.log(image, rest)
    return (
        <div className="rounded-lg overflow-hidden bhvive-card p-3 gap-3 flex flex-col">

            <div className="flex justify-between items-start">
                <p className="text-xl font-semibold">{name}</p>
                <Button className="flex-col gap-1"
                    style={{ gap: 4 }}
                >
                    <img src={locationIcon} alt="loaction" />
                    <span className="text-sm text-gray-500">6kms</span>
                </Button>
            </div>
            <div className="rounded-lg">
                <img
                    style={{
                        objectFit: 'fill',
                        height: '16rem',
                        width: '100%'
                    }}
                    className="rounded-lg"
                    src={`https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/${image}`} width={'100%'} height={'100%'} alt="img" />

            </div>
            <div
                className="flex gap-2"
            >
                <Button
                    className="w-1/2"
                    title=""
                    icon={ButtonIcon}
                >
                    <div className="flex flex-col items-start">
                        <span className="text-sm">Day Pass</span>
                        <span className="text-base font-bold text-start">₹ {day_pass_price}/
                            <span className="text-sm font-light">day</span>
                            </span>
                    </div>
                </Button>
                <Button
                    type='primary'
                    className="bg-yellow-500 w-1/2"
                    title=""
                    icon={ButtonIcon}
                >
                    <div className="flex flex-col items-start">
                        <span className="text-sm">Bulk Pass</span>
                        <span className="text-base font-bold text-start">₹ {(day_pass_price || 0) * 10}/
                            <span className="text-sm font-light text-start">10 days</span>
                            </span>
                        {/* <span> {(day_pass_price || 0) * 10}/10 days</span> */}
                    </div>
                </Button>

            </div>
            {/* <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm ${getTypeColor(type)}`}>
            {type}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold">{location}</h3>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Day Pass</span>
            <span className="font-bold">₹ {dayPass.price}</span>
            <span className="text-xs text-gray-500">/{dayPass.duration}</span>
          </div>
          
          <div className="flex items-center">
            <span className="mx-2">→→→</span>
          </div>

          <div className="flex flex-col bg-yellow-100 p-2 rounded">
            <div className="flex items-center justify-between">
              <span className="text-sm">Bulk Pass</span>
              <span className="text-xs bg-gray-800 text-white px-2 py-0.5 rounded ml-2">
                {bulkPass.discount}% Discount
              </span>
            </div>
            <span className="font-bold">₹ {bulkPass.price}</span>
            <span className="text-xs text-gray-500">/{bulkPass.duration}</span>
          </div>
        </div>
      </div> */}
        </div>
    );
};

const getTypeColor = (type: string) => {
    const colors = {
        Workspace: 'bg-purple-600 text-white',
        Honeykomb: 'bg-amber-600 text-white',
        Platinum: 'bg-gray-800 text-white',
        Campus: 'bg-blue-600 text-white',
        Premium: 'bg-emerald-600 text-white',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-600 text-white';
};

export default WorkspaceCard; 