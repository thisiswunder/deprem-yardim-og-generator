import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};
const logo =
  'data:image/png;base64,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';
const isAccesTokenExists = process.env.GOOGLE_STATIC_API_KEY ? true : false;

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

  // https://maps.googleapis.com/maps/api/staticmap?
  const apiUrl = 'https://maps.googleapis.com/maps/api/staticmap?';
  const center = `${lat},${lng}`;
  const zoom = '17';
  const size = '450x550';
  const mapType = 'roadmap';
  const markers = `color:red%7C${center}`;
  const accessToken = `${process.env.GOOGLE_STATIC_API_KEY}`;
  const scale = '1';
  const style1 =
    'feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off';
  const style2 =
    'feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xece2d9';
  const style3 =
    'feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0xb8cb93%7Cvisibility:on';
  const style4 = 'feature:poi%7Cvisibility:off';
  const style5 = 'feature:poi%7Celement:labels.text%7Cvisibility:off';
  const style6 = 'feature:poi.business%7Cvisibility:off';
  const style7 = 'feature:poi.medical%7Cvisibility:on';
  const style8 = 'feature:poi.park%7Cvisibility:on';
  const style9 = 'feature:poi.park%7Celement:geometry.fill%7Ccolor:0xccdca1';
  const style10 = 'feature:poi.park%7Celement:labels.text%7Cvisibility:off';
  const style11 = 'feature:poi.sports_complex%7Cvisibility:on';
  const style12 =
    'feature:road%7Celement:geometry.fill%7Chue:0xff0000%7Csaturation:-100%7Clightness:99';
  const style13 =
    'feature:road%7Celement:geometry.stroke%7Ccolor:0x808080%7Clightness:54';
  const style14 =
    'feature:road%7Celement:geometry.stroke%7Ccolor:0x808080%7Clightness:54';
  const style15 = 'feature:road%7Celement:labels.text.fill%7Ccolor:0x767676';
  const style16 = 'feature:road%7Celement:labels.text.stroke%7Ccolor:0xffffff';
  const style17 =
    'feature:water%7Chue:0x0088ff%7Csaturation:43%7Clightness:-11';

  const FULL_URL = `${apiUrl}center=${center}&zoom=${zoom}&size=${size}&maptype=${mapType}&markers=${markers}&key=${accessToken}&scale=${scale}&style=${style1}&style=${style2}&style=${style3}&style=${style4}&style=${style5}&style=${style6}&style=${style7}&style=${style8}&style=${style9}&style=${style10}&style=${style11}&style=${style12}&style=${style13}&style=${style14}&style=${style15}&style=${style16}&style=${style17}`;
  console.log('asdasd', FULL_URL);
  return isAccesTokenExists ? (
    <img alt="avatar" height="100%" src={FULL_URL} />
  ) : (
    <>GOOGLE_STATIC_API_KEY is not provided</>
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
      <div style={{ width: '85%', marginLeft: '15px' }}>{props.address}</div>
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
        height: '55%',
        overflow: 'hidden',
      }}
    >
      <RequestIcon />
      <span
        style={{
          width: '85%',
          marginLeft: '15px',
        }}
      >
        {props.entry}
      </span>
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
        position: 'relative',
        paddingBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '60%',
            height: '100%',
            flexDirection: 'column',
            paddingTop: '47px',
            paddingLeft: '24px',
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
            backgroundColor: 'blue',
          }}
        >
          {props.staticMap}
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '24px',
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center',
        }}
      >
        <img
          alt="avatar"
          width="60"
          src={logo}
          style={{
            borderRadius: '15px',
          }}
        />
        <div style={{ marginLeft: '15px', marginBottom: '5px' }}>
          afetharita.com
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '20px',
          backgroundColor: '#DB2121',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
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
          fontSize: 30,
          color: 'black',
          background: '#EBEBEB',
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
