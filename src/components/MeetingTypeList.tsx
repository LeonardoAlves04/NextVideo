"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [MeetingType, setMeetingType] = useState<
    "isScheduleMeeting" | "isInstantMeeting" | "isJoiningMeeting" | undefined
  >();

  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="Nova reunião"
        description="Comece uma nova reunião"
        handleClick={() => setMeetingType("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Agendar reunião"
        description="Agende uma nova reunião"
        handleClick={() => setMeetingType("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="Ver gravações"
        description="Veja suas gravações"
        handleClick={() => router.push("/recordings")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Ingresse em uma reunião"
        description="Via link de reunião"
        handleClick={() => setMeetingType("isJoiningMeeting")}
        className="bg-yellow-1"
      />

      <MeetingModal
        isOpen={() => meetingType === "isInstantMeeting"}
        onClose={() => setMeetingType(undefined)}
        title="Começar uma reunião agora"
        className="text-center"
        buttonText="Começar reunião"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
