import { Link, Outlet } from 'react-router-dom'

export const PopularBrands = ({ brandsMode }) => {

    const navItemStyle = { color: brandsMode === 'light' ? 'black' : 'white' };

    return (
        <div>
            <div className="row bg-body-secondary">
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="" >Hero</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary'to="hondaBikes" >Honda</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="ktmBikes" >Ktm</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="bajajBikes" >Bajaj</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="tvsBikes" >Tvs</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="suzukiBikes" >Suzuki</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '4rem'}}><Link className='nav-link text-secondary' to="yamahaBikes" >Yamaha</Link></div>
                <div className="col-1 badge text-wrap" style={{width: '6rem'}}><Link className='nav-link text-secondary' to="royalEnfieldBikes" >Royal Enfield</Link></div>
            </div>
            <Outlet />
        </div>
    )
}
