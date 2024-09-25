"use client"

import React from 'react'
import HomePage from './celtable'


const page = () => {
  return (
    <div className="background">
      <div className="grid grid-cols-3 gap-4 pt-16 mb-12">
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">AFC East</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Buffalo Bills</h4>
              <h4 className='pl-2'>New York Jets</h4>
              <h4 className='pl-2'>Miami Dolphins</h4>
              <h4 className='pl-2'>New England Patriots</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">AFC North</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Pittsburg Steelers</h4>
              <h4 className='pl-2'>Baltimore Ravens</h4>
              <h4 className='pl-2'>Cleveland Browns</h4>
              <h4 className='pl-2'>Cincinatti Bengals</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">AFC South</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Houston Texans</h4>
              <h4 className='pl-2'>Indanappalios Colts</h4>
              <h4 className='pl-2'>Jacksonville Jaguars</h4>
              <h4 className='pl-2'>Tennesse Titans</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">AFC West</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Kansas City Chiefs</h4>
              <h4 className='pl-2'>San Diego Chargers</h4>
              <h4 className='pl-2'>Las Vegas Raiders</h4>
              <h4 className='pl-2'>Denver Broncos</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">NFC East</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Washington Commanders</h4>
              <h4 className='pl-2'>Philidalphia Eagles</h4>
              <h4 className='pl-2'>New York Giants</h4>
              <h4 className='pl-2'>Dallas Cowboys</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">NFC North</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Minnesato Vikings</h4>
              <h4 className='pl-2'>Detriot Lions</h4>
              <h4 className='pl-2'>Green Bay Packers</h4>
              <h4 className='pl-2'>Chicago Bears</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">NFC South</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>New Orleans Saints</h4>
              <h4 className='pl-2'>Tampa Bay Buccaneers</h4>
              <h4 className='pl-2'>Atlanta Falcons</h4>
              <h4 className='pl-2'>North Carolina Panthers</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">NFC West</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Seattle Seahawks</h4>
              <h4 className='pl-2'>Arizona Cardinals</h4>
              <h4 className='pl-2'>Los Angeles Rams</h4>
              <h4 className='pl-2'>San Fransisco 49ers</h4>
            </div>
        </div>
        <div className="bg-purple-400">
            <h3 className="text-white text-2xl text-center">Insights</h3>
            <div className="grid grid-rows-4">
              <h4 className='pl-2'>Draft Data</h4>
              <h4 className='pl-2'>TouchDown Data</h4>
              <h4 className='pl-2'>Passing Data</h4>
              <h4 className='pl-2'>Rushing Data</h4>
              <h4 className='pl-2'>Fun Data</h4>
              <h4 className='pl-2'>NFL Data</h4>
              <h4 className='pl-2'>Position Data</h4>
              <h4 className='pl-2'>School/Birth Data</h4>
            </div>
        </div>
      </div>

      
    </div>
  )
}

export default page
