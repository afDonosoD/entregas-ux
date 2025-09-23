//
//  RemindersView.swift
//  Mediminder
//
//  Created by Andres Donoso on 23/09/25.
//

import SwiftUI

struct RemindersView: View {
	var body: some View {
		//		GeometryReader { proxy in
		//			ZStack(alignment: .topLeading) {
		//				Image(.day)
		//					.resizable()
		//					.aspectRatio(contentMode: .fit)
		//					.frame(width: proxy.size.width / 1.5)
		//
		//				VStack {
		//					HStack {
		//						Spacer()
		//
		//						VStack {
		//							Text("Domingo")
		//							Text("Septiembre 14")
		//						}
		//					}
		//				}
		//			} //: ZStack
		//			.ignoresSafeArea()
		//		} //: GeometryReader
		VStack {
			HStack {
				Spacer()

				VStack(alignment: .trailing) {
					Text("Domingo\nSeptiembre 14")
						.font(.title)
						.bold()
						.padding(.bottom, 16)
					
					Text("¡Buenos días, Mary!")
						.padding(.bottom, 8)
					
					Text("Hoy **no tienes** medicinas pendientes por tomar")
				}
				.multilineTextAlignment(.trailing)
			}
			.padding(.trailing, 16)

			Spacer()
		}
		.background {
			GeometryReader { proxy in
				Image(.day)
					.resizable()
					.aspectRatio(contentMode: .fit)
					.frame(width: proxy.size.width / 1.5)
			}
			.ignoresSafeArea()
		}
	}
}

#Preview {
	RemindersView()
		.fontDesign(.rounded)
}
