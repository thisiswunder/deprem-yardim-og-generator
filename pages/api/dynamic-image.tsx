import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { RiMapPinUserLine } from 'react-icons/ri';

export const config = {
  runtime: 'edge',
};

const isAccesTokenExists = process.env.MAPBOX_ACCESS_TOKEN ? true : false;

const UserPinIcon = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812zm-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    </div>
  );
};

const RequestIcon = () => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="60"
        height="60"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M18.364 10.98c1.562 1.561 1.562 4.094 0 5.656l-5.657 5.657c-.39.39-1.024.39-1.414 0l-5.657-5.657c-1.562-1.562-1.562-4.095 0-5.657 1.562-1.562 4.095-1.562 5.657 0l.706.707.708-.707c1.562-1.562 4.095-1.562 5.657 0zM7.05 12.392c-.78.781-.78 2.048 0 2.829l4.95 4.95 4.95-4.95c.78-.781.78-2.048 0-2.829-.781-.78-2.048-.78-2.83.002l-2.122 2.118-2.12-2.12c-.78-.78-2.047-.78-2.828 0zM12 1c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
      </svg>
    </div>
  );
};

interface IStaticMap {
  loc: string[]; // exp: 12.123,12.1234
}

const StaticMap = (props: IStaticMap) => {
  const lat = props.loc[0];
  const lng = props.loc[1];
  const marker = {
    type: 'Point',
    coordinates: [Number(lat), Number(lng)],
  };

  const apiUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v12/static';
  const geoJsonConverter = `geojson(${encodeURIComponent(
    JSON.stringify(marker),
  )})`;
  const pointAndZoom = `${lat},${lng},13`;
  const imageDimesion = '444x544';

  const accessToken = `access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;
  const FULL_URL = `${apiUrl}/${geoJsonConverter}/${pointAndZoom}/${imageDimesion}?${accessToken}`;
  return isAccesTokenExists ? (
    <img alt="avatar" width="444" src={FULL_URL} />
  ) : (
    <>MAPBOX_ACCESS_TOKEN is not provided</>
  );
};

interface IAddressSection {
  address: string;
}

const AddressSection = (props: IAddressSection) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
        marginBottom: '45px',
      }}
    >
      <UserPinIcon />
      <div style={{ width: '80%', marginLeft: '15px' }}>{props.address}</div>
    </div>
  );
};

interface IEntrySection {
  entry: string;
}

const EntrySection = (props: IEntrySection) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        position: 'relative',
        marginBottom: '25px',
      }}
    >
      <RequestIcon />
      <div style={{ width: '80%', marginLeft: '15px' }}>{props.entry}</div>
    </div>
  );
};

interface ILayout {
  addressSection: JSX.Element;
  entrySection: JSX.Element;
  staticMap: JSX.Element;
}

const Layout = (props: ILayout) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: '43px 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '60%',
            height: '100%',
            flexDirection: 'column',
            padding: '4px',
          }}
        >
          {props.addressSection}
          {props.entrySection}
        </div>
        <div
          style={{
            display: 'flex',
            width: '40%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {props.staticMap}
        </div>
      </div>
    </div>
  );
};
/**
 *
 * @param address
 * formatted address parameter fills the top left text field. formatted_address should be sent to this parameter
 * @param entry
 * full entry parameter fills the bottom left field raw.full_text should be sent to this parameter
 * @param loc
 * accepts string array as lat,lng. loc field should be sent to this parameter as string. it will render a map image from mapbox. MAPBOX_ACCESS_TOKEN has to be present in .env file or ENV paramater at vercel
 * @returns
 */
export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const address = searchParams.get('address');
  const entry = searchParams.get('entry');
  const loc = searchParams.get('loc').split(',');

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 26,
          color: 'black',
          background: '#f6f6f6',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Layout
          addressSection={<AddressSection address={address} />}
          entrySection={<EntrySection entry={entry} />}
          staticMap={<StaticMap loc={loc} />}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
