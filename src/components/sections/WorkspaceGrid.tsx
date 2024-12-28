import React, { useState, useEffect } from 'react'
import api from "../../services/api";
import WorkspaceCard from "./WorkspaceCard";

const WorkspaceGrid: React.FC = () => {

  const [spaceOverview, setSpaceOverview] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const fetchData = () => {
    setIsLoading(true)
    api.get('https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json')
      .then((res) => {
        setSpaceOverview(res?.data || [])
        setIsLoading(false)
      })
      .catch((e) => {
        setIsLoading(true)

      })
  }
  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Space Overview</h2>
          <div className="text-yellow-400 text-2xl sm:hidden cursor-pointer">→</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {spaceOverview.map((spaceItems, index) => (
            <WorkspaceCard key={index} {...spaceItems}
              image={spaceItems?.images?.[0] || ''}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceGrid